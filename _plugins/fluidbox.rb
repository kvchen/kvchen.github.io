module Jekyll
  class FluidboxTag < Liquid::Tag
    def initialize(tag_name, img, tokens)
      super
      @img = img
    end

    def render(context)
      site = context.registers[:site]
      converter = site.find_converter_instance(::Jekyll::Converters::Markdown)

      asset_path = converter.convert("{% asset_path '#{@img}' %}")
      img_tag = converter.convert("{% img '#{@img}' magick:resize:800> %}")

      asset_path

      # "<a href=\"#{asset_path}\" data-no-instant>
      #   #{img_tag}
      # </a>"
    end
  end
end

Liquid::Template.register_tag('fb', Jekyll::FluidboxTag)
