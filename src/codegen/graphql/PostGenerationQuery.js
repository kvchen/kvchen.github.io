

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostGenerationQuery
// ====================================================

export type PostGenerationQuery_allMarkdownRemark_edges_node_frontmatter = {|
  +date: ?any,
  +path: ?string,
  +title: ?string,
|};

export type PostGenerationQuery_allMarkdownRemark_edges_node = {|
  /**
   * The id of this node.
   */
  +id: string,
  +excerpt: ?string,
  +frontmatter: ?PostGenerationQuery_allMarkdownRemark_edges_node_frontmatter,
|};

export type PostGenerationQuery_allMarkdownRemark_edges = {|
  /**
   * The item at the end of the edge
   */
  +node: ?PostGenerationQuery_allMarkdownRemark_edges_node
|};

export type PostGenerationQuery_allMarkdownRemark = {|
  /**
   * A list of edges.
   */
  +edges: ?$ReadOnlyArray<?PostGenerationQuery_allMarkdownRemark_edges>
|};

export type PostGenerationQuery = {|
  /**
   * Connection to all MarkdownRemark nodes
   */
  +allMarkdownRemark: ?PostGenerationQuery_allMarkdownRemark
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