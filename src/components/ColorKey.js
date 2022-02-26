export default function ColorKey({colorKey}) {
    return (
      <div className="flex w-max mt-3">
        {colorKey.map(item => (
          <div className="flex items-center ml-5">
            <span className={`block w-2 sm:w-4 h-2 sm:h-4`} style={{backgroundColor: item.color}}></span>
            <span className="ml-1 text-[50%] sm:text-xs font-medium">{item.meaning}</span>
          </div>
        ))}
      </div>
    )
}