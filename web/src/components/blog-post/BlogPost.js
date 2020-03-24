import React from "react"
import {
  Wrapper,
  H1Wrapper,
  IntroContainer,
  BodyContainer,
  ButtonWrapper,
  QuoteContainer,
  LeftQuotationMark,
  QuoteContent,
  RightQuotationMark,
  SourcesContainer,
} from "../styles/StyledBlogPost"
import BlockContent from "../block-content"
import Product from "../Product"
import Button from "../Button"

const BlogPost = ({ post }) => {
  const {
    title,
    introduction,
    _rawBody,
    products,
    ctaSection,
    quoteSection,
    sources,
  } = post
  console.log(post)

  return (
    <>
      <H1Wrapper>
        <h1>{title}</h1>
      </H1Wrapper>
      <IntroContainer>
        <Wrapper>
          <h4>{introduction}</h4>
        </Wrapper>
      </IntroContainer>
      <BodyContainer>
        <Wrapper>{_rawBody && <BlockContent blocks={_rawBody} />}</Wrapper>
      </BodyContainer>
      {products.map(product => {
        return <Product key={product.id} product={product} />
      })}
      <IntroContainer>
        <Wrapper>
          <h4>{ctaSection.ctaDescription}</h4>
          <ButtonWrapper>
            <Button
              bgColor={"#4B7838"}
              fontColor={"#FFF"}
              link={ctaSection.ctaButtonUrl}
            >
              {ctaSection.ctaButtonText}
            </Button>
          </ButtonWrapper>
        </Wrapper>
      </IntroContainer>
      <Wrapper>
        <QuoteContainer>
          <LeftQuotationMark>
            <img
              src="https://res.cloudinary.com/crjars/image/upload/c_scale,f_auto,q_auto:best,w_100/v1585077397/left-quotation.svg"
              alt="left quotation marks"
            />
          </LeftQuotationMark>
          <QuoteContent>
            <blockquote>{quoteSection.quoteText}</blockquote>
            <p>{quoteSection.quoteAuthor}</p>
          </QuoteContent>
          <RightQuotationMark>
            <img
              src="https://res.cloudinary.com/crjars/image/upload/c_scale,f_auto,q_auto:best,w_100/v1585077419/right-quotation.svg"
              alt="right quotation marks"
            />
          </RightQuotationMark>
        </QuoteContainer>
      </Wrapper>
      <Wrapper>
        <SourcesContainer>
          <h2>SOURCES</h2>
          {sources.map(source => {
            return <p><a href={source.sourceUrl}>{source.authorAndSource}<br />{source.sourceUrl}</a></p>
          })}
        </SourcesContainer>
      </Wrapper>
    </>
  )
}

export default BlogPost
