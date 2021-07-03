/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal, window) {
  'use strict'

  Drupal.behaviors.someThing = {
    attach: function (context, settings) {
      $(context).find('.ELEMENT').once('something-processed').each(function () {

      })
    }
  }
})(window.jQuery, window.Drupal, this, this.document)
