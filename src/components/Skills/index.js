import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import WordCloud from './wordcloud'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <button type="button" class="btn btn-success btn-lg btn-block" href="https://sentient-image-prototype.vercel.app/">Sentient Image AI Recognition</button>
          <button type="button" class="btn btn-success btn-lg btn-block" href="https://sentient-two-prompted-prototype.vercel.app/">Sentient Two Prompted Chatbot</button>
          <button type="button" class="btn btn-success btn-lg btn-block" href="https://sentient-voice-recognition-ai.vercel.app/">Sentient Voice Assistant AI</button>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
