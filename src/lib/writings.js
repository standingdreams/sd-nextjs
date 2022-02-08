import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'writings')

export const getSortedPosts = () => {
  const fileNames = fs.readdirSync(postDirectory)
  const filteredFileNames = fileNames.filter((thisFilename) => thisFilename !== '.DS_Store')

  const allPostsData = filteredFileNames?.map((filteredFilename) => {
    const slug = filteredFilename.replace('.mdx', '')
    const fullPath = path.join(postDirectory, filteredFilename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    const { date, title, filename } = data

    return { date, slug, title, filename }
  })

  return {
    success: true,
    posts: allPostsData.sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) {
        return 1
      }
      return -1
    }),
  }
}

export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(postDirectory)
  const filteredFileNames = fileNames.filter((thisFilename) => thisFilename !== '.DS_Store')

  return filteredFileNames.map((filteredFiles) => ({
    params: {
      slug: filteredFiles.replace('.mdx', ''),
    },
  }))
}

export const getPostData = async (mdxFile) => {
  const fullPath = path.join(postDirectory, `${mdxFile}.mdx`)
  const postContent = fs.readFileSync(fullPath, 'utf8')

  return postContent
}
