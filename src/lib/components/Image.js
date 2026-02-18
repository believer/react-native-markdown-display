import React from 'react'
import { Image as RNImage } from 'react-native'

export function Image(props) {
	const [size, setSize] = React.useState({ height: 0, width: 0 })

	React.useEffect(() => {
		RNImage.getSize(props.source.uri).then((size) => {
			setSize(size)
		})
	}, [props.source.uri])

	if (size.width === 0) {
		return null
	}

	return (
		<RNImage
			{...props}
			style={{ flexGrow: 1, aspectRatio: 16/9 }}
		/>
	)
}
