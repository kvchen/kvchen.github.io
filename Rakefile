# coding: utf-8

deploy_dir = "_site"
deploy_branch = "gh-pages"
config_files = ["_config/_config.yml", "_config/_content.yml"]


DEPLOY_DIR = '_site'
SOURCE_BRANCH = 'source'
DEPLOY_BRANCH = 'master'

CONFIG_DIR = '_config'
CONFIG_FILES = {
  :test => ['config.yml', 'content.yml', 'local.yml'],
  :prod => ['config.yml', 'content.yml']
}


# Helper methods

def colorize(text, color_code)
  "\e[#{ color_code }m#{ text }\e[0m"
end

def red(text); colorize(text, 31); end
def green(text); colorize(text, 32); end
def blue(text); colorize(text, 34); end

def set_config()
  
end


def abort_on_failure(cmd)
  if not system(cmd)
    puts red("`#{ cmd }` failed with exit code #{ $?.exitstatus }!")
    exit(1)
  end
end


# Tasks

desc 'Sets config variables according to the environment'
task :set_config do
  CONFIG_ARGS = CONFIG_FILES[RAKE_ENV].collect { |f| File.join(CONFIG_DIR, f) }.join(',')
end


desc 'Serve site locally'
task :serve do
  begin
    system("jekyll serve --config #{ CONFIG_ARGS } --destination #{ DEPLOY_DIR }")
  rescue Interrupt => e

  end
end


desc 'Push compiled site files to Github pages'
task :push do
  system("git branch -D #{ DEPLOY_BRANCH }")
  abort_on_failure("git checkout -b #{ DEPLOY_BRANCH }")

  abort_on_failure("jekyll build --config #{ CONFIG_ARGS } --destination #{ DEPLOY_DIR }")
  abort_on_failure("touch #{ File.join(DEPLOY_DIR, '.nojekyll') }")

  message = "Site updated at #{ Time.now.utc }"
  abort_on_failure('git add -A')
  abort_on_failure("git commit -m \"#{ message }\"")

  abort_on_failure("git filter-branch --subdirectory-filter #{ DEPLOY_DIR }/ -f")
  abort_on_failure("git push origin #{ DEPLOY_BRANCH } --force")
  abort_on_failure("git checkout #{ SOURCE_BRANCH }")
end


desc 'Compile and deploy to Github pages'
task :deploy do
  RAKE_ENV = :prod
  
  Rake::Task['set_config'].invoke
  Rake::Task['push'].invoke
end


desc 'Compile and test locally'
task :default do
  RAKE_ENV = :test

  Rake::Task['set_config'].invoke
  Rake::Task['serve'].invoke
end
