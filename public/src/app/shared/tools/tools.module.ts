export function slugify(text) {
	return text.toString().toLowerCase()
		.replace(/\s+/g, '-')           // Replace spaces with -
		.replace(/\s/g, '')
		.replace(/[àáâãäå]/g, 'a')
		.replace(/æ/g, 'ae')
		.replace(/ç/g, 'c')
		.replace(/[èéêë]/g, 'e')
		.replace(/[ìíîï]/g, 'i')
		.replace(/ñ/g, 'n')
		.replace(/[òóôõö]/g, 'o')
		.replace(/œ/g, 'oe')
		.replace(/[ùúûü]/g, 'u')
		.replace(/[ýÿ]/g, 'y')
		.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
		.replace(/\-\-+/g, '-')         // Replace multiple - with single -
		.replace(/^-+/, '')             // Trim - from start of text
		.replace(/-+$/, '');            // Trim - from end of text
}
