import React, { Children } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { pathname } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  const className = 
    pathname === props.href
    ? `${childClassName} ${activeClassName}`.trim()
    : `/${pathname.split("/")[1]}` === props.href
    ? `${childClassName} ${activeClassName}`.trim()
    : childClassName

  return (
    <Link {...props}>
      <a>
      {React.cloneElement(child, {
        className: className || null,
      })}
      </a>
    </Link>
  )
}

export default ActiveLink
