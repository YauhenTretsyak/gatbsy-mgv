import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'
import introSectionsData from '../../dataComponents/introSectionsData'
import { Intro } from '..'

const IntroSections = () => {

  const sections = introSectionsData.map(item => {
    return(
      <Intro 
        key={ uuidv4() }
        section_img={ item.img } 
        title={ item.title } 
        info={ item.info }
        isButton={ item.isButton }
      />
    )
  })

  return(
    <>
      { sections }
    </>
  )
}

export default IntroSections;