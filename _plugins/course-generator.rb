module Jekyll
  class CourseGenerator < Jekyll::Generator
    safe true
    priority :low

    def generate(site)
      site.config['courses'].each do |course, info|
        course_page = site.pages.detect {|page| page.data['slug'] == course}

        course_page.data['title'] = info['title']
        course_page.data['description'] = info['description']
        course_page.data['semester'] = info['semester']
        course_page.data['items'] = []

        info['topics'].each do |topic, content|
          topic_url = site.pages.detect{|page| page.data['slug'] == topic}

          course_page.data['items'] << {
            'title' => content['title'], 
            'description' => nil, 
            'url' => topic_url.url
          }
        end
      end
    end
  end
end
