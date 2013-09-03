// Generated by CoffeeScript 1.6.3
(function() {
  var Form,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Form = (function() {
    function Form() {
      this._startingFromDateFields = __bind(this._startingFromDateFields, this);
      this._dateFields();
      this._normalDateFields();
      this._startingFromDateFields();
      this._untilDateFields();
      this._rangeDateFields();
      this._fixPlaceholders();
      this._hijackSubmit();
    }

    Form.prototype._dateFieldOptions = {
      dateFormat: 'dd/mm/yy',
      dayNames: [Locale.msg('DatePickerFullSunday'), Locale.msg('DatePickerFullMonday'), Locale.msg('DatePickerFullTuesday'), Locale.msg('DatePickerFullWednesday'), Locale.msg('DatePickerFullThursday'), Locale.msg('DatePickerFullFriday'), Locale.msg('DatePickerFullSaturday')],
      dayNamesMin: [Locale.msg('DatePickerMinimalSunday'), Locale.msg('DatePickerMinimalMonday'), Locale.msg('DatePickerMinimalTuesday'), Locale.msg('DatePickerMinimalWednesday'), Locale.msg('DatePickerMinimalThursday'), Locale.msg('DatePickerMinimalFriday'), Locale.msg('DatePickerMinimalSaturday')],
      dayNamesShort: [Locale.msg('DatePickerShortSunday'), Locale.msg('DatePickerShortMonday'), Locale.msg('DatePickerShortTuesday'), Locale.msg('DatePickerShortWednesday'), Locale.msg('DatePickerShortThursday'), Locale.msg('DatePickerShortFriday'), Locale.msg('DatePickerShortSaturday')],
      monthNames: [Locale.msg('DatePickerFullJanuary'), Locale.msg('DatePickerFullFebruary'), Locale.msg('DatePickerFullMarch'), Locale.msg('DatePickerFullApril'), Locale.msg('DatePickerFullMay'), Locale.msg('DatePickerFullJune'), Locale.msg('DatePickerFullJuly'), Locale.msg('DatePickerFullAugust'), Locale.msg('DatePickerFullSeptember'), Locale.msg('DatePickerFullOctober'), Locale.msg('DatePickerFullNovember'), Locale.msg('DatePickerFullDecember')],
      monthNamesShort: [Locale.msg('DatePickerShortJanuary'), Locale.msg('DatePickerShortFebruary'), Locale.msg('DatePickerShortMarch'), Locale.msg('DatePickerShortApril'), Locale.msg('DatePickerShortMay'), Locale.msg('DatePickerShortJune'), Locale.msg('DatePickerShortJuly'), Locale.msg('DatePickerShortAugust'), Locale.msg('DatePickerShortSeptember'), Locale.msg('DatePickerShortOctober'), Locale.msg('DatePickerShortNovember'), Locale.msg('DatePickerShortDecember')],
      firstDay: 1,
      hideIfNoPrevNext: true,
      nextText: Locale.lbl('Next'),
      prevText: Locale.lbl('Previous'),
      closeText: Locale.lbl('Close'),
      showAnim: 'slideDown'
    };

    Form.prototype._parseDate = function(element, key) {
      var data;
      if (element.data(key) == null) {
        throw Error('No ' + key + ' passed through the data-attributes');
      }
      data = element.data(key).split('-');
      return new Date(parseInt(data[0], 10), parseInt(data[1], 10) - 1, parseInt(data[2], 10));
    };

    Form.prototype._dateFields = function() {
      return $.datepicker.setDefaults(Form._dateFieldOptions);
    };

    Form.prototype._normalDateFields = function() {
      return $('.inputDatefieldNormal').each(function() {
        return $(this).datepicker();
      });
    };

    Form.prototype._startingFromDateFields = function() {
      return $('.inputDatefieldFrom').each(function() {
        var $this, startDate;
        $this = $(this);
        startDate = Form._parseDate($this, 'startdate');
        $this.datepicker().datepicker('option', 'minDate', startDate);
        if (new Date() < startDate) {
          return $this.datepicker('option', 'defaultDate', startDate);
        }
      });
    };

    Form.prototype._untilDateFields = function() {
      return $('.inputDatefieldTill').each(function() {
        var $this, endDate;
        $this = $(this);
        endDate = Form._parseDate($this, 'enddate');
        $this.datepicker().datepicker('option', 'maxDate', endDate);
        if (new Date() > endDate) {
          return $this.datepicker('option', 'defaultDate', endDate);
        }
      });
    };

    Form.prototype._rangeDateFields = function() {
      return $('.inputDatefieldRange').each(function() {
        var $this, endDate, startDate;
        $this = $(this);
        startDate = Form._parseDate($this, 'startdate');
        endDate = Form._parseDate($this, 'enddate');
        $this.datepicker().datepicker('option', 'minDate', startDate).datepicker('option', 'maxDate', endDate);
        if (new Date() < startDate) {
          $this.datepicker('option', 'defaultDate', startDate);
        }
        if (new Date() > endDate) {
          return $this.datepicker('option', 'defaultDate', endDate);
        }
      });
    };

    Form.prototype._fixPlaceholders = function() {
      var $input;
      jQuery.support.placeholder = (__indexOf.call(document.createElement('input'), 'placeholder') >= 0);
      if (!jQuery.support.placeholder) {
        $input = $('input[placeholder]');
        $input.on('focus', function() {
          var $this;
          $this = $(this);
          if ($this.val() === $this.attr('placeholder')) {
            return $this.val('').removeClass('placeholder');
          }
        });
        $input.on('blur', function() {
          var $this;
          $this = $(this);
          if ($this.val() === '' || $this.val() === $this.attr('placeholder')) {
            return $this.val($this.attr('placeholder')).addClass('placeholder');
          }
        });
        $input.blur;
        return $input.parents('form').submit(function() {
          return $(this).find('input[placeholder]').each(function() {
            if ($(this).val() === $(this).attr('placeholder')) {
              return $(this).val('');
            }
          });
        });
      }
    };

    Form.prototype._hijackSubmit = function() {
      return $('form').on('submit', function(e) {
        return App.current.showLoadingBar();
      });
    };

    return Form;

  })();

  window.Form = Form;

}).call(this);