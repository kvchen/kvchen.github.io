

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostQuery
// ====================================================

export type PostQuery_markdownRemark_frontmatter = {|
  +__typename: "frontmatter_3",
  +date: ?any,
  +title: ?string,
  +path: ?string,
|};

export type PostQuery_markdownRemark = {|
  +__typename: "MarkdownRemark",
  +html: ?string,
  +frontmatter: ?PostQuery_markdownRemark_frontmatter,
|};

export type PostQuery = {|
  +markdownRemark: ?PostQuery_markdownRemark
|};

export type PostQueryVariables = {|
  +path: string
|};

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================