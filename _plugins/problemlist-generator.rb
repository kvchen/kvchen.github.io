module Jekyll
  class ProblemList < Page
    def initialize(site, base, dir, topic, content)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'topic.html')
      self.data['title'] = content['title']
      self.data['slug'] = topic

      self.data['permalink'] = '/' + dir + '/'
      self.data['items'] = []

      problems = content['problems']
      if not problems.nil?
        problems.each do |problem_slug|
          problem = site.pages.detect {|page| page.data['slug'] == problem_slug}

          if not problem.nil?
            self.data['items'] << {
              'title' => problem.data['title'],
              'description' => problem.data['description'], 
              'url' => problem.url
            }
          end
        end
      end
    end
  end

  class ProblemListGenerator < Jekyll::Generator
    safe true
    priority :medium

    def generate(site)
      site.config['courses'].each do |course, info|
        info['topics'].each do |topic, content|
          site.pages << ProblemList.new(
            site, 
            site.source, 
            File.join(course, topic), 
            topic, 
            content
          )
        end
      end
    end
  end
end
