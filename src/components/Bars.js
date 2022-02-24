export default function Bars({array}) {
    return (
        <div className="min-h-[150px] h-[150px] w-[300px] sm:min-h-[300px] sm:h-[300px] sm:w-[600px] justify-center">
            {array.map(item => {
                return <div
                    key={item}
                    className="inline-block transition-[height] duration-[0.25s] ease-out bottom-0"
                    style={
                        { backgroundColor: item.color, width: `${100 / array.length}%`, minHeight: `${(item.value) * (100 / array.length)}%`, height: `${(item.value) * (100 / array.length)}%` }
                    }></div>
            })}
        </div>
    )
}