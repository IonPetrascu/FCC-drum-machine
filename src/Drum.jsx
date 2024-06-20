const Drum = ({audioClip}) => {

  const playSound = (clip)=>{
    document.getElementById(clip.keyTrigger).play().catch(console.error)
     document.getElementById('display').innerHTML = clip.description
  }
  return (
    <button onClick={()=> playSound(audioClip)} className="drum-pad" id={`drum-${audioClip.keyTrigger}`}>
      <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip"/>
    {audioClip.keyTrigger}
    </button>
  )
}

export default Drum
