import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import WordCloud from './wordcloud'
import 'bootstrap/dist/css/bootstrap.min.css'  // Import Bootstrap

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

          {/* Button Group */}
          <div className="container">
            <div className="row">
              <div className="col-12 mb-3">
                <a href="https://sentient-image-prototype.vercel.app/" className="btn btn-success btn-lg btn-block">
                  Sentient Image AI Recognition
                </a>
              </div>
              <div className="col-12 mb-3">
                <a href="https://sentient-two-prompted-prototype.vercel.app/" className="btn btn-success btn-lg btn-block">
                  Sentient Two Prompted Chatbot
                </a>
              </div>
              <div className="col-12 mb-3">
                <a href="https://sentient-voice-recognition-ai.vercel.app/" className="btn btn-success btn-lg btn-block">
                  Sentient Voice Assistant AI
                </a>
              </div>
            </div>
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
