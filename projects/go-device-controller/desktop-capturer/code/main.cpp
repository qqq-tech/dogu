//
//  main.cpp
//  webrtc_lib_practice
//
//  Created by jenkins on 2022/12/04.
//

#include "args/args.hxx"
#include "mywebrtc.h"

#include <iostream>

int main(int argc, const char *argv[])
{

  args::ArgumentParser parser("Desktopcapturer.", "");
  args::HelpFlag help(parser, "help", "Display this help menu", {'h', "help"});
  args::ValueFlag<int> port(parser, "port", "port to send vpx packet", {"port"});
  args::ValueFlag<int> width(parser, "width", "width to encode", {"width"}, 0);
  args::ValueFlag<int> height(parser, "height", "height to encode", {"height"}, 0);
  args::ValueFlag<int> fps(parser, "fps", "fps to encode", {"fps"}, 30);
  try
  {
    parser.ParseCLI(argc, argv);
  }
  catch (args::Help)
  {
    std::cout << parser << std::flush;
    exit(1);
  }
  catch (args::ParseError e)
  {
    std::cerr << e.what() << std::endl;
    std::cerr << parser << std::flush;
    exit(1);
  }
  catch (args::ValidationError e)
  {
    std::cerr << e.what() << std::endl;
    std::cerr << parser << std::flush;
    exit(1);
  }
  if (!port)
  {
    std::cerr << "port is required" << std::endl;
    std::cerr << parser << std::flush;
    exit(1);
  }
  if (!fps || fps.Get() < 1 || fps.Get() > 60)
  {
    std::cerr << "fps is required and must be between 1 and 60" << std::endl;
    std::cerr << parser << std::flush;
    exit(1);
  }
  std::cout << "[DesktopCapturer]\n"
            << std::flush;
  std::cout << "port: " << port.Get() << std::endl
            << std::flush;
  std::cout << "width: " << width.Get() << std::endl
            << std::flush;
  std::cout << "height: " << height.Get() << std::endl
            << std::flush;
  std::cout << "fps: " << fps.Get() << std::endl
            << std::flush;

  mywebrtc::prepare(port.Get(), width.Get(), height.Get(), fps.Get());
  mywebrtc::connect();
  mywebrtc::createEncoder();
  mywebrtc::startCapture();

  return 0;
}
