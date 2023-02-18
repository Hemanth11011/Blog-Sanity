function Logo(props:any) {
    const {renderDefault,title} = props;
  return (
    <div className="flex items-center space-x-2">
        <img 
        src="https://i.pinimg.com/736x/2b/23/47/2b2347e1084480d433823688b14c0fd0.jpg" 
        alt="logo" 
        className="rounded-full object-cover" 
        width={50} 
        />
        <>{renderDefault(props)}</>
    </div>
  )
}   

export default Logo