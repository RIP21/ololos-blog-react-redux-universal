import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { bindActionCreators } from 'redux'
import { getById } from '../../utils/helpers'
import { authorsSelector } from '../../selector/selectors'
import * as Constants from '../../constants/constants'
import * as authorActions from '../../redux/authors'

class AuthorPage extends React.Component {
  render() {
    const { authorName, id } = this.props.author

    const authorHelmet = {
      title: authorName,
      meta: [
        { name: 'description', content: authorName },
        {
          name: 'article:author',
          content: 'https://www.facebook.com/OlolosBlog/',
        },
        { name: 'twitter:account_id', content: '828735737327734788' },
        { name: 'twitter:title', property: 'og:title', content: authorName },
        { name: 'twitter:site', content: '@OlolosBlog' },
        {
          name: 'twitter:description',
          property: 'og:description',
          content: authorName,
        },
        // { name: 'twitter:image', property: 'og:image', content: `${Constants.ABSOLUTE_HOST_PATH}${previewPic}` },
        {
          property: 'og:url',
          content: `${Constants.ABSOLUTE_HOST_PATH}/post/${id}`,
        },
        { property: 'og:type', content: 'webpage' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:card', content: authorName },
        { property: 'og:creator', content: authorName },
      ],
    }

    const style = {
      textAlign: 'center',
    }
    return (
      <div className="container" style={style}>
        <Helmet {...authorHelmet} />
        <h1>{authorName}</h1>
        <img
          width="150"
          height="150"
          alt="Under construction"
          src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNkI0ODQxOyIgZD0iTTc5LjQ0OCwyNDcuMTcyaDM1LjMxdi0zNS4zMWgtMzUuMzFWMjQ3LjE3MnoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM2QjQ4NDE7IiBkPSJNMzk3LjI0MSwyNDcuMTcyaDM1LjMxdi0zNS4zMWgtMzUuMzFWMjQ3LjE3MnoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM2QjQ4NDE7IiBkPSJNNDE0Ljg5Nyw3MC42MjFjLTYuMTc5LDAtMTIuMzU5LTEuNzY2LTE3LjY1NS01LjI5N3Y0MC42MDdoMzUuMzFWNjUuMzI0ICAgQzQyNy4yNTUsNjguODU1LDQyMS4wNzYsNzAuNjIxLDQxNC44OTcsNzAuNjIxIi8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNkI0ODQxOyIgZD0iTTk3LjEwMyw3MC42MjFjLTYuMTc5LDAtMTIuMzU5LTEuNzY2LTE3LjY1NS01LjI5N3Y0MC42MDdoMzUuMzFWNjUuMzI0ICAgQzEwOS40NjIsNjguODU1LDEwMy4yODMsNzAuNjIxLDk3LjEwMyw3MC42MjEiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojNTU2MDgwOyIgZD0iTTAsMjExLjg2Mmg1MTJWMTA1LjkzMUgwVjIxMS44NjJ6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNFMTU2NDk7IiBkPSJNMTMyLjQxNCwzNS4zMWMwLTE5LjQyMS0xNS44OS0zNS4zMS0zNS4zMS0zNS4zMXMtMzUuMzEsMTUuODktMzUuMzEsMzUuMzFzMTUuODksMzUuMzEsMzUuMzEsMzUuMzEgIFMxMzIuNDE0LDU0LjczMSwxMzIuNDE0LDM1LjMxIi8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzZCNDg0MTsiIGQ9Ik03OS40NDgsNTEyaDM1LjMxVjM1My4xMDNoLTM1LjMxVjUxMnoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM2QjQ4NDE7IiBkPSJNMzk3LjI0MSw1MTJoMzUuMzFWMzUzLjEwM2gtMzUuMzFWNTEyeiIvPgo8L2c+CjxwYXRoIHN0eWxlPSJmaWxsOiM0QzJDMjg7IiBkPSJNMTE0Ljc1OSw0NjcuODYyaDI4Mi40ODN2LTUyLjk2NkgxMTQuNzU5VjQ2Ny44NjJ6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0VDQkExNjsiIGQ9Ik02Ny45NzIsMTA1LjkzMUwwLDE3My45MDN2MzcuOTU5aDg3LjM5M2wxMDUuOTMxLTEwNS45MzFINjcuOTcyeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0VDQkExNjsiIGQ9Ik0yMTEuODYyLDIxMS44NjJoMTI0LjQ2OWwxMDUuOTMxLTEwNS45MzFIMzE3Ljc5M0wyMTEuODYyLDIxMS44NjJ6Ii8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik0zMzYuMzMxLDIxMS44NjJINDYwLjhsNTAuMzE3LTUwLjMxN3YtNTUuNjE0aC02OS43MzhMMzM2LjMzMSwyMTEuODYyeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRUNCQTE2OyIgZD0iTTUxMiwyMTEuODYydi01MC4zMTdsLTUwLjMxNyw1MC4zMTdINTEyeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNTU2MDgwOyIgZD0iTTAsMzUzLjEwM2g1MTJWMjQ3LjE3MkgwVjM1My4xMDN6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0VDQkExNjsiIGQ9Ik02Ny45NzIsMjQ3LjE3MkwwLDMxNS4xNDV2MzcuOTU5aDg3LjM5M2wxMDUuOTMxLTEwNS45MzFINjcuOTcyeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0VDQkExNjsiIGQ9Ik0yMTEuODYyLDM1My4xMDNoMTI0LjQ2OWwxMDUuOTMxLTEwNS45MzFIMzE3Ljc5M0wyMTEuODYyLDM1My4xMDN6Ii8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6IzU1NjA4MDsiIGQ9Ik0zMzYuMzMxLDM1My4xMDNINDYwLjhsNTAuMzE3LTUwLjMxN3YtNTUuNjE0aC02OS43MzhMMzM2LjMzMSwzNTMuMTAzeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRUNCQTE2OyIgZD0iTTUxMiwzNTMuMTAzdi01MC4zMTdsLTUwLjMxNyw1MC4zMTdINTEyeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRTE1NjQ5OyIgZD0iTTM3OS41ODYsMzUuMzFjMC0xOS40MjEsMTUuODktMzUuMzEsMzUuMzEtMzUuMzFjMTkuNDIxLDAsMzUuMzEsMTUuODksMzUuMzEsMzUuMzEgIHMtMTUuODksMzUuMzEtMzUuMzEsMzUuMzFDMzk1LjQ3Niw3MC42MjEsMzc5LjU4Niw1NC43MzEsMzc5LjU4NiwzNS4zMSIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
        />
        <br />
        Когда-то здесь будет красивая страничка с нашими фотографиями и ссылками
        на наши тви и инста аккаунты, а пока вот вам сухая информация.
        <br />
        Уникальный идентификатор этого пользователя: {id}, а имя {authorName}.
      </div>
    )
  }
}

AuthorPage.propTypes = {
  author: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownProps) {
  return {
    author: getById(
      authorsSelector(state),
      ownProps.params.id,
      Constants.EMPTY_AUTHOR,
    ),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage)
