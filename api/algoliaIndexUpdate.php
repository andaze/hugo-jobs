<?php
 
require __DIR__ . '/vendor/autoload.php';
// $demo = \Algolia\AlgoliaSearch\Log\DebugLogger::enable();
$client = \Algolia\AlgoliaSearch\SearchClient::create(
   '8ZLJKOR6PD', //
   'b6ba8b65e391a1f14c6d7a975f27d8e0'
 );
 
$index_en = $client->initIndex('job_english_content');
$index_ja = $client->initIndex('job_japanese_content');
$records = json_decode(file_get_contents('https://andaze.com/job/ja/algolia.json'), true);
 
$en_result = array_filter($records, function ($item) {
  if (stripos($item['lang'], 'en' ) !== false) {
      return true;
  }
  return false;
});
 
$ja_result = array_filter($records, function ($item) {
  if (stripos($item['lang'], 'ja' ) !== false) {
      return true;
  }
  return false;
});
 
$index_en->saveObjects($en_result, ['autoGenerateObjectIDIfNotExist' => true]);
$index_ja->saveObjects($ja_result, ['autoGenerateObjectIDIfNotExist' => true]);
?>
