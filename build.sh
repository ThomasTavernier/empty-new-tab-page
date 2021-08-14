test -f ./*.zip && rm ./*.zip
git archive --format zip --output "$(git show main:manifest.json | grep '"version"' | cut -d\" -f4)".zip main
