/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

;(function(Mozilla) {
    'use strict';

    var $shield = $('#tracking-protection-animation');

    Mozilla.HighlightTarget.init('.button-flat-dark');

    $('.button-flat-dark').on('highlight-target', function() {
        $shield.addClass('blocked');
    });

})(window.Mozilla);
