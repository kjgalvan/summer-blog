import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "kaityagalvan@gmail.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        A blog documenting my Summer 2019 internship experience.
        <br />
        Themed after Gatsby's blog starter and Dan Abramov's{' '}
        <a href="https://overreacted.io/">overreacted.io</a>.<br />
        Created using{' '}
        <a href="https://github.com/frontarm/create-react-blog">
          create-react-blog
        </a>.
      </p>
    </div>
  )
}

export default Bio
