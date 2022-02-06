import React, { useReducer } from 'react'
import { Layout } from '../components/Layout'
import { PortfolioItem } from '../components/PortfolioItem'
import { portfolioData } from '../data'
import { slugify } from '../utils'

const { sites } = portfolioData

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

export default function Portfolio() {
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
              {sites.map((item, index) => {
                const companyName = slugify(item.companyName)
                const plusOne = index + 1
                const formattedIndex = plusOne.toLocaleString('en-US', {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })
                return (
                  <li key={companyName}>
                    <button
                      type="button"
                      className={`${state.activePortfolio === companyName ? 'current__item' : ''}`}
                      onClick={() => {
                        dispatch({ type: 'portfolioClick', payload: companyName })
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
            {sites.map((item) => {
              const companyName = slugify(item.companyName)

              return (
                <PortfolioItem
                  key={companyName}
                  item={item}
                  currentItem={state.activePortfolio}
                  itemSlug={companyName}
                  clickHandler={() => {
                    dispatch({ type: 'portfolioClick', payload: companyName })
                  }}
                  escaped={() => dispatch({ type: 'closePortfolio' })}
                />
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}
