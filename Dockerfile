FROM ruby:2.6.3

RUN apt-get update -qq && apt-get install -y build-essential nodejs \
  && rm -rf /var/lib/apt/lists/* \
  && curl -o- -L https://yarnpkg.com/install.sh | bash


WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN gem install bundler && bundle install && gem install foreman

COPY . .

EXPOSE 3000

ENTRYPOINT ["bash", "./entrypoint.sh"]
