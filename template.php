<?php

/**
* Preprocesses the wrapping HTML.
*
* @param array &$variables
*   Template variables.
*/
function spencer_preprocess_html(&$vars) {
  
  // mobile Meta Tag.
  $mobile_meta = array(
    '#type' => 'html_tag',
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'viewport',
      'content' => 'initial-scale=1.0, width=device-width',
    ),
  );
  
  // Add Google Webmasters Verification Meta Tag to head.
  drupal_add_html_head($mobile_meta, 'mobile_meta');
}
?>