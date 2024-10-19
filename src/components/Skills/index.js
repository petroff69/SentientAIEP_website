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

          {/* Custom Button Group */}
          <div className="button-container">
            <a href="https://sentient-image-prototype.vercel.app/" className="custom-btn">
              Sentient Image AI Recognition
            </a>
            <a href="https://sentient-two-prompted-prototype.vercel.app/" className="custom-btn">
              Sentient Two Prompted Chatbot
            </a>
            <a href="https://sentient-voice-recognition-ai.vercel.app/" className="custom-btn">
              Sentient Voice Assistant AI
            </a>
          </div>
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
