import { useBlockProps } from '@wordpress/block-editor';
import { TextareaControl, SelectControl } from '@wordpress/components';
import './editor.scss';
import { options } from './options';

export default function Edit({ attributes, setAttributes }) {
	const { text, selectedOption } = attributes;

	const selected = options.find(option => option.value === selectedOption) || options[0];

	return (
		<div {...useBlockProps()}>
			<aside class="note-block">
				<div class="note-block__title">
					<span class="icon" dangerouslySetInnerHTML={{ __html: selected.svg }}></span>
					<SelectControl
						value={selectedOption}
						options={options.map(option => ({ value: option.value, label: option.label }))}
						onChange={(newOption) => setAttributes({ selectedOption: newOption })}
					/>
				</div>
				<div class="note-block__content">
					<TextareaControl
						value={text}
						onChange={(newText) => setAttributes({ text: newText })}
						rows={3}
					/>
				</div>
			</aside>
		</div>
	);
}
