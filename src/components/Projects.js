import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export const Projects = () => (
  <StaticQuery
    query={graphql`
			{
				github {
					repositoryOwner(login: "jameswlane") {
						repositories(
							first: 8
							orderBy: { field: STARGAZERS, direction: DESC }
						) {
							edges {
								node {
									id
									name
									url
									description
									stargazers {
										totalCount
									}
									forkCount
								}
							}
						}
					}
				}
			}
		`}
    render={({
               github: {
                 repositoryOwner: {
                   repositories: { edges },
                 },
               },
             }) => (
      <div className="nes-container with-title">
        <p className="title">Projects</p>
        {edges.map(({ node }) => (
          <section className="nes-container member-card">
            <h4>{node.name}</h4>
            <p>{node.description}</p>
            <div>
              <span>{node.stargazers.totalCount}</span>
            </div>
            <div>
              <span>{node.forkCount}</span>
            </div>
          </section>
        ))}
      </div>
    )}
  />
)
