require 'cgi'
require 'kramdown'
require 'uri'


module Jekyll
  class SolutionBlock < Liquid::Block
    def render(context)
      problem_num = context.environments.first['page']['problem_num'] ||= 1
      solution_toggle = "<a class=\"solution-toggle\" solution=\"#{ problem_num }\" href=\"#\">Toggle Solution</a>"
      solution_div = "<div class=\"solution\" id=\"#{ problem_num }\">"

      options = context.registers[:site].config['kramdown']
      "#{ solution_toggle }\n#{ solution_div }" + Kramdown::Document.new(super, options).to_html + "</div>"
    end
  end

  class ProblemBlock < Liquid::Block
    def render(context)
      problem_num = context.environments.first['page']['problem_num'] ||= 1
      context.environments.first['page']['problem_num'] += 1

      options = context.registers[:site].config['kramdown']
      "<h1>Question #{ problem_num.to_s }</h1>" + Kramdown::Document.new(super, options).to_html + "<hr>"
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
Liquid::Template.register_tag('problem', Jekyll::ProblemBlock)
Liquid::Template.register_tag('solution', Jekyll::SolutionBlock)
