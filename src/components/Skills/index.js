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
          <div class="container">
    <div class="row">
      <div class="col-12 mb-3">
        <a href="https://sentient-image-prototype.vercel.app/" class="btn btn-success btn-lg btn-block">Sentient Image AI Recognition</a>
      </div>
      <div class="col-12 mb-3">
        <a href="https://sentient-two-prompted-prototype.vercel.app/" class="btn btn-success btn-lg btn-block">Sentient Two Prompted Chatbot</a>
      </div>
      <div class="col-12 mb-3">
        <a href="https://sentient-voice-recognition-ai.vercel.app/" class="btn btn-success btn-lg btn-block">Sentient Voice Assistant AI</a>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
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
