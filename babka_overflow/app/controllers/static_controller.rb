class StaticController < ApplicationController
    def root
        render plain: "you're at the root! React tho?"
    end
end
