import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = 'Sentient AIEP'.split('')
  const jobArray = 'Artificial Intelligence'.split('')
  const interestArray = 'Experimental Prototyping'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={0}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={22}
            />
          </h1>
          <h2>
            Emotional chatbot/ Two Prompted Chatbot/ Voice Assistant and Recognition/ Image Recognition 
          </h2>
          <br></br>
          <div className="button-container">
            <a
              href={require('../../assets/Sentient_Artificial_Intelligence_Experimental_Prototyping__Comprehensive_Design__Development__and_Evaluation.pdf')}
              className="flat-button"
              download
            >
              DOWNLOAD THE RESEARCH PAPER
            </a>
            <a
              href="https://github.com/petroff69/Sentient-AI-Experimental-Prototype"
              className="flat-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW PROJECT ON GITHUB
            </a>
          </div>
        </div>
        <div className="logo-container">
          <img src={LogoTitle} alt="Logo" className="logo-right" />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
