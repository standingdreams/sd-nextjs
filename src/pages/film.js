import React, { useReducer } from 'react'
import { Layout } from '../components/Layout'
import { filmData } from '../data'
import { slugify } from '../utils/index'

const { films } = filmData

function reducer(state, action) {
  switch (action.type) {
    case 'portfolioClick':
      return {
        ...state,
        showPortfolioItem: action.payload !== state.activePortfolio,
        activePortfolio: action.payload === state.activePortfolio ? '' : action.payload,
      }

    case 'closePortfolio':
      return {
        ...state,
        showPortfolioItem: false,
        activePortfolio: '',
      }

    default:
      throw new Error()
  }
}

export default function Film() {
  const initialState = {
    showPortfolioItem: false,
    activePortfolio: '',
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  function handleOnKeyDown(event) {
    if (event.keyCode === 27) {
      dispatch({ type: 'closePortfolio' })
    }
  }

  return (
    <Layout title="Portfolio">
      <section className={`listings-wrapper${state.showPortfolioItem === true ? ' listings-shown' : ''}`}>
        <div className="container">
          <article className="listings-nav">
            <ul>
              {films.map((item, index) => {
                const filmSlug = slugify(item.filmName)
                const plusOne = index + 1
                const formattedIndex = plusOne.toLocaleString('en-US', {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })
                return (
                  <li key={filmSlug}>
                    <button
                      type="button"
                      className={`${state.activePortfolio === filmSlug ? 'current__item' : ''}`}
                      onClick={() => {
                        dispatch({ type: 'portfolioClick', payload: filmSlug })
                      }}
                      onKeyDown={handleOnKeyDown}
                    >
                      {formattedIndex}
                    </button>
                  </li>
                )
              })}
            </ul>
          </article>
          <div className="listings-item__wrapper">
            {films.map((item) => {
              const { filmName, projectDescription, videoId, role } = item
              const filmSlug = slugify(filmName)

              function handled(event) {
                if (event.keyCode === 27) {
                  dispatch({ type: 'closePortfolio' })
                }
              }

              return (
                <article
                  id={filmSlug}
                  key={filmSlug}
                  className={`listings-item${state.activePortfolio === filmSlug ? ' show-listings-item' : ''}`}
                >
                  <div className="listings-item__content">
                    <header className="listings-header">
                      <button
                        type="button"
                        className="listings-item__name"
                        onClick={() => dispatch({ type: 'portfolioClick', payload: filmSlug })}
                        onKeyDown={handled}
                      >
                        {filmName}
                      </button>
                      <h3 className="listings-item__role">{role}</h3>
                    </header>
                    <div className="listings-item__copy">
                      <div dangerouslySetInnerHTML={{ __html: projectDescription }} />
                    </div>
                  </div>
                  <div className="listings-item__thumbnail">
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}
