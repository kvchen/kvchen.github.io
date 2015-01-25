# coding: utf-8

deploy_dir = "_site"
deploy_branch = "gh-pages"
config_files = ["_config/_config.yml", "_config/_content.yml"]

desc "Build site"
task :build do
  config = config_files.join(",")
  puts("Generating static site into #{deploy_dir}")
  build_status = system("bundle exec jekyll build --config #{config} --destination #{deploy_dir}")
  asset_status = system("touch #{deploy_dir}/.nojekyll")
  puts (build_status and asset_status) ? "Success" : "Failed"
end

desc "Serve site locally"
task :serve do
  config_files << "_config/_local.yml"
  config = config_files.join(",")
  puts("Generating static site into #{deploy_dir}")
  build_status = system("bundle exec jekyll serve --no-watch --config #{config} --destination #{deploy_dir}")
  asset_status = system("touch #{deploy_dir}/.nojekyll")
  puts (build_status and asset_status) ? "Success" : "Failed"
end

desc "Commit local files"
task :commit do
  puts "\n## Staging modified files"
  status = system("git add -A")
  puts status ? "Success" : "Failed"
  puts "\n## Committing a site build at #{Time.now.utc}"
  message = "Updated site at #{Time.now.utc}"
  status = system("git commit -m \"#{message}\"")
  puts status ? "Success" : "Failed"
  puts "\n## Pushing commits to remote"
  status = system("git push origin source")
  puts status ? "Success" : "Failed"
end

desc "Deploy local files to Github Pages"
task :deploy do
  puts "\n## Deleting master branch"
  status = system("git branch -D master")
  puts status ? "Success" : "Failed"
  puts "\n## Creating new master branch and switching to it"
  status = system("git checkout -b master")
  puts status ? "Success" : "Failed"
  puts "\n## Forcing #{deploy_dir} subdirectory to be project root"
  status = system("git filter-branch --subdirectory-filter #{deploy_dir}/ -f")
  puts status ? "Success" : "Failed"
  puts "\n## Switching back to source branch"
  status = system("git checkout source")
  puts status ? "Success" : "Failed"
  puts "\n## Pushing all branches to origin"
  status = system("git push --all origin")
  puts status ? "Success" : "Failed"
end

desc "Commit and deploy local files"
task :commit_deploy => [:commit, :deploy] do
end

desc "Default task"
task :default => [:build, :commit_deploy] do
end
