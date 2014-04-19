<?php

function open_social_user_transfer() {
	global $wpdb;
	@ini_set("max_execution_time", 300);
	$name = array(
		'gtid' => 'google',
		'mtid' => 'live',
		'stid' => 'sina',
		'qtid' => 'qq',
		'qqtid' => 'qq',
		'rtid' => 'renren',
		'ktid' => 'kaixin',
		'dtid' => 'douban',
		'bdtid' => 'baidu',
		'ttid' => 'twitter',
		'fbtid' => 'facebook'
	);
	$users = $wpdb -> get_results("SELECT um1.user_id,um1.meta_key,um1.meta_value FROM $wpdb->usermeta um1 INNER JOIN $wpdb->usermeta um2 ON um1.user_id = um2.user_id WHERE (um1.meta_key like '%tid' AND um2.meta_key like '%mid')", ARRAY_A);
	foreach ($users as $user) {
		$open_type = get_user_meta($user['user_id'], 'open_type', true);
		if (empty($open_type) && array_key_exists($user['meta_key'], $name)) {
			update_user_meta($user['user_id'], 'open_id', $user['meta_value']);
			update_user_meta($user['user_id'], 'open_email', 0);
			update_user_meta($user['user_id'], 'open_type', $name[$user['meta_key']]);
		} 
	} 
} 

?>
