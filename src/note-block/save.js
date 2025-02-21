import { useBlockProps } from '@wordpress/block-editor';
import { options } from './options';

export default function save({ attributes }) {
	const { text, selectedOption } = attributes;

	if (!text) {
		return null;
	}

	const selected = options.find(option => option.value === selectedOption) || options[0];

	return (
		<div {...useBlockProps.save()}>
			<aside class="note-block">
				<div class="note-block__title">
					<span class="icon" dangerouslySetInnerHTML={{ __html: selected.svg }}></span>
					<span class="title">{selected.label}</span>
				</div>
				<div class="note-block__content">
					<p>{text}</p>
				</div>
			</aside>
		</div>
	);
}
