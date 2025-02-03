import Image from 'next/image'

type MovieTop10BadgeProps = {
    width?: number
    height?: number
}
export default function MovieTop10Badge({ height, width }: MovieTop10BadgeProps) {
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
