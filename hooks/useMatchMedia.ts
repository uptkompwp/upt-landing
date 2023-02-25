/**
 * props IuserMatchMedia
 * returns boolean
 */
import React, { useState, useEffect } from 'react'

interface IUseMatchMedia {
  mediaQuery: string
}

const useMatchMedia = ({ mediaQuery }: IUseMatchMedia): boolean => {
  const [match, setMatch] = useState<boolean>(false)
  useEffect(() => {
    const matchMedia = window.matchMedia(mediaQuery).matches
    setMatch(matchMedia)
    window.addEventListener('resize', function () {
      const matchMedia = window.matchMedia(mediaQuery).matches
      setMatch(matchMedia)
    })

    return () => {
      window.removeEventListener('resize', () => {
        setMatch(false)
      })
    }
  }, [match])

  return match;
};

export default useMatchMedia;
