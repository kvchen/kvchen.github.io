require 'cgi'
require 'uri'


module Jekyll
  class SolutionBlockTag < Liquid::Tag
    def render(context)
      problem_num = context.environments.first['problem_num'] ||= 1
      solution_toggle = "<a class=\"solution-toggle\" solution=\"#{ problem_num }\" href=\"#\">Toggle Solution</a>"
      solution_div = "<div class=\"solution\" id=\"#{ problem_num }\">"

      "#{ solution_toggle } #{ solution_div }\n"
    end
  end

  class SolutionBlockEndTag < Liquid::Tag
    def render(context)
      '</div>'
    end
  end

  class ProblemBlockTag < Liquid::Tag
    def render(context)
      problem_num = context.environments.first['problem_num'] ||= 1
      context.environments.first['problem_num'] = problem_num + 1
      "<h1>Question #{ problem_num.to_s }</h1>"
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
