import Image from 'next/image'

type Props = {
    width?: number
    height?: number
}
export default function Top10({ height, width }: Props) {
    return (
        <Image
            src={'/vector/Top10.svg'}
            width={width ?? 44}
            height={height ?? 44}
            className='m-0'
            alt="Top10"
        />
    )
}
