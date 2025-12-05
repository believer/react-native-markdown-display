import React from "react"
import { Image as RNImage } from "react-native"

export function Image(props) {
	const [layout, setLayout] = React.useState(0)
	const [size, setSize] = React.useState({ height: 0, width: 0 })

	React.useEffect(() => {
		RNImage.getSize(props.source.uri).then((size) => {
			setSize(size)
		})
	}, [props.source.uri])

	if (size.width === 0) {
		return null
	}

	const ratio = layout / size.width
	const height = Math.round(size.height * ratio)

	return (
		<RNImage
			{...props}
			onLayout={(event) => {
				const { width } = event.nativeEvent.layout
				setLayout(width)
			}}
			style={{ flexGrow: 1, height, width: layout }}
		/>
	)
}
