<?php
/**
 * Plugin Name:       Chaser Note Block
 * Description:       A custom block for adding notes
 * Version:           1.1.8
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
