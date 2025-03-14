<?php
/**
 * Plugin Name:       Chaser Note Block
 * Description:       Another note block
 * Version:           1.1.6
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       note-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function create_block_note_block_block_init() {
	register_block_type( __DIR__ . '/build/chaser-note-block' );
}
add_action( 'init', 'create_block_note_block_block_init' );
