defmodule ElixirConsumerWeb.PageController do
  use ElixirConsumerWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
