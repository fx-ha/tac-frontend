const InstaIcon = ({ href, title }: { href: string; title: string }) => {
  return (
    <a href={href} title={title} target="_blank" rel="noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 72 72"
      >
        <defs />
        <g fill="none" fillRule="evenodd">
          <path fill="#000" d="M0 72h72V0H0z" />
          <path
            fill="#FFF"
            d="M36.0000476 12c6.5179611 0 7.3352665.0276278 9.8951217.1444265 2.5545202.116513 4.2991658.52226 5.8257427 1.1155901 1.5782121.613241 2.9166344 1.4338809 4.2509601 2.7681113 1.3342304 1.3343257 2.1548703 2.672748 2.7682066 4.2509601.5932348 1.5265769.9989818 3.2712225 1.1154948 5.8257427C59.9723722 28.6646859 60 29.4819913 60 36.0000476c0 6.5179611-.0276278 7.3352665-.1444265 9.8951217-.116513 2.5545202-.52226 4.2991658-1.1154948 5.8257427-.6133363 1.5782121-1.4339762 2.9166344-2.7682066 4.2509601-1.3343257 1.3342304-2.672748 2.1548703-4.2509601 2.7682066-1.5265769.5932348-3.2712225.9989818-5.8257427 1.1154948C43.3353141 59.9723722 42.5180087 60 36.0000476 60c-6.5180563 0-7.3353617-.0276278-9.8952169-.1444265-2.5545202-.116513-4.2991658-.52226-5.8257427-1.1154948-1.5782121-.6133363-2.9166344-1.4339762-4.2509601-2.7682066-1.3342304-1.3343257-2.1548703-2.672748-2.7681113-4.2509601-.5933301-1.5265769-.9990771-3.2712225-1.1155901-5.8257427C12.0276278 43.3353141 12 42.5180087 12 36.0000476c0-6.5180563.0276278-7.3353617.1444265-9.8952169.116513-2.5545202.52226-4.2991658 1.1155901-5.8257427.613241-1.5782121 1.4338809-2.9166344 2.7681113-4.2509601 1.3343257-1.3342304 2.672748-2.1548703 4.2509601-2.7681113 1.5265769-.5933301 3.2712225-.9990771 5.8257427-1.1155901C28.6646859 12.0276278 29.4819913 12 36.0000476 12zm0 4.3243166c-6.4083073 0-7.167404.0244839-9.6981071.1399489-2.3399763.1067003-3.6107582.4976808-4.4564535.8263559-1.1202582.4353755-1.9197485.9554443-2.7595373 1.7953283-.839884.8397888-1.3599528 1.6392791-1.7953283 2.7595373-.3286751.8456953-.7196556 2.1164772-.8263559 4.4564535-.115465 2.5307031-.1399489 3.2897998-.1399489 9.6981071 0 6.4082121.0244839 7.1673088.1399489 9.6980119.1067003 2.3399763.4976808 3.6107582.8263559 4.4564535.4353755 1.1202582.9555396 1.9197485 1.7953283 2.7595373.8397888.839884 1.6392791 1.3599528 2.7595373 1.7953283.8456953.3286751 2.1164772.7196556 4.4564535.8263559 2.5304173.115465 3.2893234.1399489 9.6981071.1399489 6.4086885 0 7.1676898-.0244839 9.6980119-.1399489 2.3399763-.1067003 3.6107582-.4976808 4.4564535-.8263559 1.1202582-.4353755 1.9197485-.9554443 2.7595373-1.7953283.839884-.8397888 1.3599528-1.6392791 1.7953283-2.7595373.3286751-.8456953.7196556-2.1164772.8263559-4.4564535.115465-2.5307031.1399489-3.2897998.1399489-9.6980119 0-6.4083073-.0244839-7.167404-.1399489-9.6981071-.1067003-2.3399763-.4976808-3.6107582-.8263559-4.4564535-.4353755-1.1202582-.9554443-1.9197485-1.7953283-2.7595373-.8397888-.839884-1.6392791-1.3599528-2.7595373-1.7953283-.8456953-.3286751-2.1164772-.7196556-4.4564535-.8263559-2.5307031-.115465-3.2897998-.1399489-9.6980119-.1399489zm0 7.3513668c6.8065283 0 12.324269 5.5177407 12.324269 12.3243642 0 6.8065283-5.5177407 12.324269-12.324269 12.324269-6.8066235 0-12.3243642-5.5177407-12.3243642-12.324269 0-6.8066235 5.5177407-12.3243642 12.3243642-12.3243642zm0 20.3243166C40.4182986 44 44 40.4182986 44 36.0000476 44 31.5817014 40.4182986 28 36.0000476 28 31.5817014 28 28 31.5817014 28 36.0000476 28 40.4182986 31.5817014 44 36.0000476 44zm15.691236-20.8112321c0 1.590597-1.2894545 2.8799562-2.8800515 2.8799562-1.5905018 0-2.8799562-1.2893592-2.8799562-2.8799562s1.2894544-2.8800515 2.8799562-2.8800515c1.590597 0 2.8800515 1.2894545 2.8800515 2.8800515z"
          />
        </g>
      </svg>
    </a>
  )
}

export default InstaIcon
