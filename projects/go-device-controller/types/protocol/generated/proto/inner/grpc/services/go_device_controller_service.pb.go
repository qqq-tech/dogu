// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.7
// source: inner/grpc/services/go_device_controller_service.proto

package services

import (
	params "go-device-controller/types/protocol/generated/proto/inner/params"
	types "go-device-controller/types/protocol/generated/proto/inner/types"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_inner_grpc_services_go_device_controller_service_proto protoreflect.FileDescriptor

var file_inner_grpc_services_go_device_controller_service_proto_rawDesc = []byte{
	0x0a, 0x36, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2f, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x67, 0x6f, 0x5f, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x5f,
	0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x13, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2e,
	0x67, 0x72, 0x70, 0x63, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x1a, 0x19, 0x69,
	0x6e, 0x6e, 0x65, 0x72, 0x2f, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x73, 0x2f, 0x64, 0x63, 0x5f, 0x67,
	0x64, 0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x18, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2f,
	0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x64, 0x63, 0x5f, 0x67, 0x64, 0x63, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x32, 0xbb, 0x01, 0x0a, 0x19, 0x47, 0x6f, 0x44, 0x65, 0x76, 0x69, 0x63, 0x65, 0x43,
	0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x12, 0x3b, 0x0a, 0x04, 0x43, 0x61, 0x6c, 0x6c, 0x12, 0x18, 0x2e, 0x69, 0x6e, 0x6e, 0x65, 0x72,
	0x2e, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x73, 0x2e, 0x44, 0x63, 0x47, 0x64, 0x63, 0x50, 0x61, 0x72,
	0x61, 0x6d, 0x1a, 0x19, 0x2e, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2e, 0x70, 0x61, 0x72, 0x61, 0x6d,
	0x73, 0x2e, 0x44, 0x63, 0x47, 0x64, 0x63, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x12, 0x61, 0x0a,
	0x0e, 0x53, 0x74, 0x61, 0x72, 0x74, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67, 0x12,
	0x25, 0x2e, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x44, 0x63,
	0x47, 0x64, 0x63, 0x53, 0x74, 0x61, 0x72, 0x74, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x69, 0x6e,
	0x67, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x1a, 0x26, 0x2e, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2e, 0x74,
	0x79, 0x70, 0x65, 0x73, 0x2e, 0x44, 0x63, 0x47, 0x64, 0x63, 0x53, 0x74, 0x61, 0x72, 0x74, 0x53,
	0x74, 0x72, 0x65, 0x61, 0x6d, 0x69, 0x6e, 0x67, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x30, 0x01,
	0x42, 0x7a, 0x0a, 0x2f, 0x63, 0x6f, 0x6d, 0x2e, 0x64, 0x6f, 0x67, 0x75, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x2e, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2e,
	0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2e, 0x67, 0x72, 0x70, 0x63, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x5a, 0x47, 0x67, 0x6f, 0x2d, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2d, 0x63,
	0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74,
	0x65, 0x64, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2f, 0x67,
	0x72, 0x70, 0x63, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var file_inner_grpc_services_go_device_controller_service_proto_goTypes = []interface{}{
	(*params.DcGdcParam)(nil),               // 0: inner.params.DcGdcParam
	(*types.DcGdcStartStreamingParam)(nil),  // 1: inner.types.DcGdcStartStreamingParam
	(*params.DcGdcResult)(nil),              // 2: inner.params.DcGdcResult
	(*types.DcGdcStartStreamingResult)(nil), // 3: inner.types.DcGdcStartStreamingResult
}
var file_inner_grpc_services_go_device_controller_service_proto_depIdxs = []int32{
	0, // 0: inner.grpc.services.GoDeviceControllerService.Call:input_type -> inner.params.DcGdcParam
	1, // 1: inner.grpc.services.GoDeviceControllerService.StartStreaming:input_type -> inner.types.DcGdcStartStreamingParam
	2, // 2: inner.grpc.services.GoDeviceControllerService.Call:output_type -> inner.params.DcGdcResult
	3, // 3: inner.grpc.services.GoDeviceControllerService.StartStreaming:output_type -> inner.types.DcGdcStartStreamingResult
	2, // [2:4] is the sub-list for method output_type
	0, // [0:2] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_inner_grpc_services_go_device_controller_service_proto_init() }
func file_inner_grpc_services_go_device_controller_service_proto_init() {
	if File_inner_grpc_services_go_device_controller_service_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_inner_grpc_services_go_device_controller_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_inner_grpc_services_go_device_controller_service_proto_goTypes,
		DependencyIndexes: file_inner_grpc_services_go_device_controller_service_proto_depIdxs,
	}.Build()
	File_inner_grpc_services_go_device_controller_service_proto = out.File
	file_inner_grpc_services_go_device_controller_service_proto_rawDesc = nil
	file_inner_grpc_services_go_device_controller_service_proto_goTypes = nil
	file_inner_grpc_services_go_device_controller_service_proto_depIdxs = nil
}