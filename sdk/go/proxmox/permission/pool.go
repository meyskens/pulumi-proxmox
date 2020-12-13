// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package permission

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

type Pool struct {
	pulumi.CustomResourceState

	// The pool comment
	Comment pulumi.StringPtrOutput `pulumi:"comment"`
	// The pool members
	Members PoolMemberArrayOutput `pulumi:"members"`
	// The pool id
	PoolId pulumi.StringOutput `pulumi:"poolId"`
}

// NewPool registers a new resource with the given unique name, arguments, and options.
func NewPool(ctx *pulumi.Context,
	name string, args *PoolArgs, opts ...pulumi.ResourceOption) (*Pool, error) {
	if args == nil || args.PoolId == nil {
		return nil, errors.New("missing required argument 'PoolId'")
	}
	if args == nil {
		args = &PoolArgs{}
	}
	var resource Pool
	err := ctx.RegisterResource("proxmox:Permission/pool:Pool", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPool gets an existing Pool resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPool(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PoolState, opts ...pulumi.ResourceOption) (*Pool, error) {
	var resource Pool
	err := ctx.ReadResource("proxmox:Permission/pool:Pool", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Pool resources.
type poolState struct {
	// The pool comment
	Comment *string `pulumi:"comment"`
	// The pool members
	Members []PoolMember `pulumi:"members"`
	// The pool id
	PoolId *string `pulumi:"poolId"`
}

type PoolState struct {
	// The pool comment
	Comment pulumi.StringPtrInput
	// The pool members
	Members PoolMemberArrayInput
	// The pool id
	PoolId pulumi.StringPtrInput
}

func (PoolState) ElementType() reflect.Type {
	return reflect.TypeOf((*poolState)(nil)).Elem()
}

type poolArgs struct {
	// The pool comment
	Comment *string `pulumi:"comment"`
	// The pool id
	PoolId string `pulumi:"poolId"`
}

// The set of arguments for constructing a Pool resource.
type PoolArgs struct {
	// The pool comment
	Comment pulumi.StringPtrInput
	// The pool id
	PoolId pulumi.StringInput
}

func (PoolArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*poolArgs)(nil)).Elem()
}
