require 'cgi'
require 'uri'


module Jekyll
  class SolutionBlockTag < Liquid::Tag
    @@solution_id = 0

    def render(context)
      @@solution_id += 1
      solution_toggle = "<a class=\"solution-toggle\" solution=\"#{ @@solution_id }\" href=\"#\">Toggle Solution</a>"
      solution_div = "<div class=\"solution\" id=\"#{ @@solution_id }\">"

      "#{ solution_toggle } #{ solution_div }\n"
    end
  end

  class SolutionBlockEndTag < Liquid::Tag
    def render(context)
      '</div>'
    end
  end

  class ProblemBlockTag < Liquid::Tag
    def initialize(tag_name, markup, options)
      super
    end

    def render(context)
      value = context.environments.first['problem_num'] ||= 1
      context.environments.first['problem_num'] = value + 1
      "<h1>Question #{ value.to_s }</h1>"
    end
  end

  class ProblemBlockEndTag < Liquid::Tag
    def render(context)
      '<hr>'
    end
  end

  class EnvironmentDiagram < Liquid::Block
    def render(context)
      output = super
      embed_url = URI.parse(output.strip)
      embed_url.path = "/iframe-embed.html"
      "<iframe width=\"100%\" style=\"height: 600px;\" frameborder=\"0\" src=\"#{ embed_url.to_s }\"></iframe>"
    end
  end
end

Liquid::Template.register_tag('environment', Jekyll::EnvironmentDiagram)

Liquid::Template.register_tag('problem', Jekyll::ProblemBlockTag)
Liquid::Template.register_tag('endproblem', Jekyll::ProblemBlockEndTag)

Liquid::Template.register_tag('solution', Jekyll::SolutionBlockTag)
Liquid::Template.register_tag('endsolution', Jekyll::SolutionBlockEndTag)
