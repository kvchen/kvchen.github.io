# coding: utf-8

DEPLOY_DIR = '_site'
SOURCE_BRANCH = 'source'
DEPLOY_BRANCH = 'master'

CONFIG_DIR = '_config'
CONFIG_FILES = {
  :test => ['base.yml', 'content.yml', 'local.yml'],
  :prod => ['base.yml', 'content.yml']
}


# Helper methods

def colorize(text, color_code)
  "\e[#{ color_code }m#{ text }\e[0m"
end

def red(text); colorize(text, 31); end
def green(text); colorize(text, 32); end
def blue(text); colorize(text, 34); end


def run_command(cmd, abort_on_failure=true)
  puts blue(cmd)
  success = system(cmd)

  if not success and abort_on_failure
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
    run_command("jekyll serve --config #{ CONFIG_ARGS } --destination #{ DEPLOY_DIR }", false)
  rescue Interrupt
  end
end


desc 'Push compiled site files to Github pages'
task :push do
  run_command("git branch -D #{ DEPLOY_BRANCH }", false)
  run_command("git checkout -b #{ DEPLOY_BRANCH }")

  run_command("jekyll build --config #{ CONFIG_ARGS } --destination #{ DEPLOY_DIR }")
  run_command("touch #{ File.join(DEPLOY_DIR, '.nojekyll') }")

  message = "Site updated at #{ Time.now.utc }"
  run_command('git add -A')
  run_command("git commit -m \"#{ message }\"")

  run_command("git filter-branch --subdirectory-filter #{ DEPLOY_DIR }/ -f")
  run_command("git push origin #{ DEPLOY_BRANCH } --force")
  run_command("git checkout #{ SOURCE_BRANCH }")
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
