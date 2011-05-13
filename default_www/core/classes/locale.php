<?php

/**
 * SiteLocale
 *
 * @package		site
 * @subpackage	locale
 *
 * @author 		Tijs Verkoyen <tijs@sumocoders.be>
 * @since		1.0
 */
class SiteLocale extends SpoonTemplate
{
	/**
	 * The current language
	 *
	 * @var	string
	 */
	public static $language;


	/**
	 * The locale
	 *
	 * @var	array
	 */
	public static $act = array(),
				$err = array(),
				$lbl = array(),
				$msg = array();



	/**
	 * Possible languages
	 *
	 * @var	array
	 */
	public static $possibleLanguages = array('nl');



	/**
	 * Get an action
	 *
	 * @return	string
	 * @param	string $key		The key.
	 */
	public static function act($key)
	{
		return (isset(self::$act[$key])) ? self::$act[$key] : '{$act' . $key . '}';
	}


	/**
	 * Convert the errors from the CP into readable ones
	 *
	 * @return	string
	 * @param	string $message		The message to convert.
	 */
	public static function callError($message)
	{
		$key = SpoonFilter::toCamelCase($message);
		$key = str_replace('ValidationFailed:', '', $key);
		if(substr_count($message, 'Duplicate entry ') > 0) $key = 'DuplicateEntry';

		// known error?
		if(isset(SiteLocale::$err[$key])) return SiteLocale::err($key);

		// in debug-mode we don't want mail, we just want to see the error
		if(SPOON_DEBUG) Spoon::dump($message);

		// throw an exception, so we will get a mail
		throw new Exception('Missing message: ' . $key);
	}


	/**
	 * Get an error
	 *
	 * @return	string
	 * @param	string $key		The key.
	 */
	public static function err($key)
	{
		return (isset(self::$err[$key])) ? self::$err[$key] : '{$err' . $key . '}';
	}


	/**
	 * Get the current language
	 *
	 * @return	string
	 */
	public static function getLanguage()
	{
		return self::$language;
	}


	/**
	 * Determine the prefered language
	 *
	 * @return	void
	 */
	public static function getPreferedLanguage()
	{
		// available in cookie?
		if(SpoonCookie::exists('language') && SpoonCookie::get('language'))
		{
			// set language
			$language = SpoonCookie::get('language');

			// valid language?
			if(!in_array($language, self::$possibleLanguages))
			{
				// delete cookie
				SpoonCookie::delete('language');

				// set language to first item in the possible languages
				$language = self::$possibleLanguages[0];
			}
		}

		// search for browser language
		else
		{
			if(isset($_SERVER['HTTP_ACCEPT_LANGUAGE']))
			{
				// get prefered languages
				$browserLanguages = explode(',', $_SERVER['HTTP_ACCEPT_LANGUAGE']);

				// init var
				$foundALanguage = false;

				// loop prefered langauges
				foreach($browserLanguages as $language)
				{
					$languageAbbreviation = substr($language, 0, 2);

					if(in_array($languageAbbreviation, self::$possibleLanguages))
					{
						$language = $languageAbbreviation;
						$foundALanguage = true;
					}
				}
			}

			// no language found
			if(!$foundALanguage) $language = 'nl';

			// store in cookie
			SpoonCookie::set('language', $language);
		}

		return $language;
	}


	/**
	 * Get a label
	 *
	 * @return	string
	 * @param	string $key		The key.
	 */
	public static function lbl($key)
	{
		return (isset(self::$lbl[$key])) ? self::$lbl[$key] : '{$lbl' . $key . '}';
	}


	/**
	 * Get a message
	 *
	 * @return	string
	 * @param	string $key		The key.
	 */
	public static function msg($key)
	{
		return (isset(self::$msg[$key])) ? self::$msg[$key] : '{$msg' . $key . '}';
	}


	/**
	 * Set the locale
	 *
	 * @return	void
	 * @param	string $language	The language.
	 */
	public static function setLocale($language)
	{
		self::$language = (string) $language;

		// require the file
		require_once CACHE_PATH . '/locale/' . self::$language . '.php';

		// locale
		self::$act = $act;
		self::$err = $err;
		self::$lbl = $lbl;
		self::$msg = $msg;
	}
}

?>